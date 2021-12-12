(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DOL3D = {}));
}(this, (function (exports) { 'use strict';

	class DOL3DChar {
		constructor(eventuallyStuff) {

		};

		async GetScene(sizeName) {
			if (this.object == undefined)
			{
				let gltf = await DownloadGLTF("char.glb");
				
				this.gltf = gltf.scene;
				this.object = gltf.scene.children[0];
				this.animations = gltf.animations;
				CharScale(this.object);
				this.object.children[1].material = new THREE.MeshToonMaterial({color: 0xfcc197});
			}
			return this.object;
		};

		async Generate() {
			await this.GetScene();
			this.mesh = this.object.children[1];
		};

		GetMorphAmt(morph) {
			if (morph == undefined || this.mesh.morphTargetInfluences.length < morph.index)
				return;

			
			return this.mesh.morphTargetInfluences[this.mesh.morphTargetDictionary[morph]];
		};

		Morph(morph, amt, inc) {
			if (morph == undefined || this.mesh.morphTargetInfluences.length < morph.index)
				return;

			if (inc)
				this.mesh.morphTargetInfluences[this.mesh.morphTargetDictionary[morph]] += amt;
			else
				this.mesh.morphTargetInfluences[this.mesh.morphTargetDictionary[morph]] = amt;
		};

		PlayAnim(clipNum) {
			if (this.currentAnim != undefined)
				this.currentAnim.stop();

			if (this.animMixer == undefined)
				this.animMixer = new THREE.AnimationMixer(this.object);
			else
				this.animMixer.stopAllAction();

			this.currentAnim = this.animMixer.clipAction(this.animations[clipNum]);
			this.currentAnim.play();
		};

		async AddClothing(cloth, scene) {
			let gltf = await DownloadGLTF(cloth + ".glb");
			let clothingObject = gltf.scene.children[0];
			let clothingMesh = clothingObject.children[1];
			clothingMesh.material = new THREE.MeshToonMaterial({color: 0xf944fc});
			clothingMesh.skeleton = this.mesh.skeleton;
			this.object.add(clothingObject);
		};
	};

	var Loader = null;
	function GetLoader() {
		if (Loader == null){
			Loader = new THREE.GLTFLoader();
		}
		return Loader;
	}
	

	// ToDo: host a server dedicated for this project or find a way to store assets locally 
	//       without changing safety-related browser settings
	DOL3D.DataAddress = "http://37.59.47.180/data/"

	//scale factor for characters
	DOL3D.CharSizes = {
		"Tiny": 0.76,
		"Small": 0.825,
		"Normal": 0.925,
		"Large": 1.025
	};

	//render sizes for the different renderers
	DOL3D.DisplayType = {
		Combat: {
			Width: 850,
			Height: 400,
			ClearColor: 0x111111,
		},
		Canvas:	{
			Width: 280,
			Height: 228,
			ClearColor: 0x222222,
		},
		CreateChar: {
			Width: 228,
			Height: 200,
			ClearColor: 0x222222,
		},
		Characteristics: {
			Width: 200,
			Height: 200,
			ClearColor: 0x222222,
		}
	};

	//indexes for the animations in the gltf, somwhow these don't seem to be able to be found by name
	const CharClips = {
		StandDefault: 0,
		StandTPose: 1
	};

	//method for doing it anyway... will get slower the more animations are added
	function GetAnim(char, name) {
		for (let anim in char.animations) {
			if (anim.name == name)
				return anim;
		};
		console.error("Can't find animation with name '" + name + "'.");
		return char.animations[1];
	};

	function CharScale(object, sizeName) {
		if (sizeName == undefined)
			sizeName = "Normal" 
		let size = DOL3D.CharSizes[sizeName];
		object.scale.copy(new THREE.Vector3(size, size, size));
	};
	
	function* _ActiveNPCIterator() {
		for(let i = 0; i < V.enemyno; i++) {
			yield V.NPCList[i];
		}
	};
	DOL3D.GetActiveNPCs = function () {
		return Array.from(_ActiveNPCIterator());
	};
	function DescribeNPCs() {
		let npcs = DOL3D.GetActiveNPCs();
		let output = "";
		for (let i = 0; i < npcs.length; i++) {
			let npc = npcs[i];
			output += npc.fullDescription + (i != npcs.length - 1 ? "," : "") + " <br>";
		}
		return output;
	}
	DOL3D.DescribeNPCs = DescribeNPCs;

	function CreateRenderer(dispType) {
		let renderer = new THREE.WebGLRenderer( { antialias: true } );
		let height = 100, width = 100;

		if (dispType != undefined) {
			height = dispType.Height;
			width = dispType.Width;
			renderer.setClearColor(dispType.ClearColor, 1);
		}

		renderer.setSize( width, height );
		return renderer;
	};
	function CreateCamera(dispType, fov) {
		if (fov == undefined)
			fov = 70;

		if (dispType == undefined)
			return new THREE.PerspectiveCamera( 70, 1, 0.001, 2000 );

		return new THREE.PerspectiveCamera( fov, dispType.Width / dispType.Height, 0.001, 2000 );
	};
	function CreateScene(dispType) {
		let scene = new THREE.Scene();
		let colorSky = 0xb1e1ff;
		let colorGround = 0xf5f5f5;
		let amInten = 0.4;
		let amLight = new THREE.HemisphereLight(colorSky, colorGround, amInten);
		scene.add(amLight);

		let dirInten = 0.7;
		let dirLight = new THREE.DirectionalLight(colorSky, dirInten);
		dirLight.target.position.set(-4, -10, -10);
		scene.add(dirLight);
		scene.add(dirLight.target);
		return scene;
	};



	function CreateCube() {
		let geometry = new THREE.BoxGeometry( 1, 1, 1 );
		let material = new THREE.MeshNormalMaterial();
		return new THREE.Mesh( geometry, material );
	}

	async function DownloadGLTF(url) {
		let loader = GetLoader();
		let data = await loader.loadAsync(DOL3D.DataAddress + url);
		return data;
	}
	async function CreateChar(eventuallyStuff) {
		let char = new DOL3DChar(eventuallyStuff);
		await char.Generate();
		//char.Morph("mouth_closed", 1);
		//console.log(char);
		await char.AddClothing("shirt");
		return char;
	}

	async function ShowCombat(output) {
		let type = DOL3D.DisplayType.Combat;

		let renderer = CreateRenderer(type);
		output.append( renderer.domElement );

		let camera = CreateCamera(type);			
		camera.position.z = 2.5;

		let scene = CreateScene(type);

		let char = await CreateChar();
		scene.add(char.object);


		let cube = CreateCube();
		cube.position.set(-1, 1.5, 0)
		scene.add(cube);
		//console.log(mesh);

		let npc;
		let npcs = DOL3D.GetActiveNPCs();
		for(let i = 0; i < npcs.length; i++) {
			npc = await CreateChar();
			npc.object.position.x = 1 + i;
			scene.add(npc.object);
		}
		
		renderer.setAnimationLoop((time) => {
			renderer.render( scene, camera );
		});
		
	};
	DOL3D.ShowCombat = ShowCombat;

	async function ShowCanvas(output) {
		let type = DOL3D.DisplayType.Canvas;

		let renderer = CreateRenderer(type);
		output.append( renderer.domElement );

		let camera = CreateCamera(type, 40);
		camera.position.z = 2.7;
		camera.position.y = 0.8;
		camera.position.x = 0.15;

		let scene = CreateScene(type);

		let char = await CreateChar();
		char.object.rotation.y = 0.5;
		char.PlayAnim(CharClips.StandDefault);
		char.Morph("mouth_closed", 1);
		scene.add(char.object);
		

		renderer.setAnimationLoop((time) => {
			char.animMixer.update(time);
			renderer.render( scene, camera );
		});
	};
	DOL3D.ShowCanvas =  ShowCanvas;


	async function ShowCreate(output) {
		let type = DOL3D.DisplayType.CreateChar;

		let renderer = CreateRenderer(type);
		output.append( renderer.domElement );

		let camera = CreateCamera(type, 40);
		camera.position.z = 2.7;
		camera.position.y = 0.8;
		camera.position.x = 0.15;

		let scene = CreateScene(type);

		let char = await CreateChar();
		char.object.rotation.y = 0.5;
		char.PlayAnim(CharClips.StandDefault);
		char.Morph("mouth_closed", 1);
		scene.add(char.object);
		

		renderer.setAnimationLoop((time) => {
			char.animMixer.update(time);
			renderer.render( scene, camera );
		});
	};
	DOL3D.ShowCreate = ShowCreate;

	async function ShowChara(output) {
		let type = DOL3D.DisplayType.Characteristics;
		let char;
		let render = CreateRenderer(type);
		output.append( render.domElement );

		let scene = CreateScene(type);
		let cam = CreateCamera(type);
		cam.position.z = 2;
		scene.add(cam);
		scene.add(CreateCube());


		render.setAnimationLoop((time) => {



			render.render(scene, cam);
		})
	};
	DOL3D.ShowChara = ShowChara;
})));