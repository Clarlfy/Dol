(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DOL3D = {}));
}(this, (function (exports) { 'use strict';

		var Loader = null;
		function GetLoader() {
			if (Loader == null){
				Loader = new THREE.GLTFLoader();
			}
			return Loader;
		}
		

		DOL3D.DataAddress = "http://37.59.47.180/data/"

		DOL3D.CharSizes = {
			"Tiny": 0.76,
			"Small": 0.825,
			"Normal": 0.925,
			"Large": 1.025
		};

		DOL3D.DisplayType = {
			Combat: {
				Width: 850,
				Height: 400
			},
			Canvas:	{
				Width: 280,
				Height: 228,
			},
			CreateChar: {
				Width: 228,
				Height: 200
			},
			Characteristics: {
				Width: 200,
				Height: 200
			}
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
			}

			renderer.setSize( width, height );
			return renderer;
		};
		function CreateCamera(dispType) {
			if (dispType == undefined)
				return new THREE.PerspectiveCamera( 70, 1, 0.001, 2000 );

			return new THREE.PerspectiveCamera( 70, dispType.Width / dispType.Height, 0.001, 2000 );
		};


		function CreateCube() {
			let geometry = new THREE.BoxGeometry( 1, 1, 1 );
			let material = new THREE.MeshNormalMaterial();
			return new THREE.Mesh( geometry, material );
		}

		async function GetMesh(url) {
			let loader = GetLoader();
			let data = await loader.loadAsync(DOL3D.DataAddress + url);
			return data.scene.children[0];
		}

		async function CreateChar(sizeName) {

			if (sizeName == undefined)
				sizeName = "Normal" 
			let size = DOL3D.CharSizes[sizeName];

			let mesh = await GetMesh("char.glb");
			mesh.scale.copy(new THREE.Vector3(size, size, size));
			mesh.children[1].material = new THREE.MeshNormalMaterial();
			return mesh;
		}

		function TestAnimation( time, mesh ) {
			mesh.rotation.x = time / 2000;
			mesh.rotation.y = time / 1000;
		}

		async function ShowCombat(output) {
			let type = DOL3D.DisplayType.Combat;

			let renderer = CreateRenderer(type);
			output.append( renderer.domElement );

			let camera = CreateCamera(type);			
			camera.position.z = 2.5;

			let scene = new THREE.Scene();
	
			let mesh = await CreateChar();
			scene.add( mesh );


			let cube = CreateCube();
			cube.position.set(-1, 1.5, 0)
			scene.add(cube);
			//console.log(mesh);

			let npc;
			let npcs = DOL3D.GetActiveNPCs();
			console.log(V);
			for(let i = 0; i < npcs.length; i++) {
				npc = await CreateChar();
				npc.position.x = 1 + i;
				scene.add(npc);
			}
			
			renderer.setAnimationLoop((time) => {
				//TestAnimation(time, mesh);
				renderer.render( scene, camera );
			});
			
		};
		DOL3D.ShowCombat = ShowCombat;

		async function ShowCanvas(output) {
			let type = DOL3D.DisplayType.Canvas;

			let renderer = CreateRenderer(type);
			output.append( renderer.domElement );

			let camera = CreateCamera(type);
			camera.position.z = 2;

			let scene = new THREE.Scene();

			let mesh = await CreateChar();
			scene.add(mesh);
			scene.add(CreateCube());
			//console.log(mesh);
			
			renderer.setAnimationLoop((time) => {
				TestAnimation(time, mesh);
				renderer.render( scene, camera );
			});
		};
		DOL3D.ShowCanvas =  ShowCanvas;


		async function ShowCreate(output) {
			let type = DOL3D.DisplayType.CreateChar;
			let char;
			let render = CreateRenderer(type);
			output.append( render.domElement );

			let scene = new THREE.Scene();
			let cam = CreateCamera(type);
			cam.position.z = 2;
			scene.add(cam);
			scene.add(CreateCube());


			render.setAnimationLoop((time) => {



				render.render(scene, cam);
			})
		};
		DOL3D.ShowCreate = ShowCreate;

		async function ShowChara(output) {
			let type = DOL3D.DisplayType.Characteristics;
			let char;
			let render = CreateRenderer(type);
			output.append( render.domElement );

			let scene = new THREE.Scene();
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