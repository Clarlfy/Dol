
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DOL3D = {}));
}(this, (function (exports) { 'use strict';

		DOL3D.CombatWidth  = 850;
		DOL3D.CombatHeight = 400;

		// just for testing and learning how data in dol is stored in combat
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


		function ShowCombat(output) {

			function animation( time ) {

				mesh.rotation.x = time / 2000;
				mesh.rotation.y = time / 1000;
	
				renderer.render( scene, camera );
	
			}
	
			State.variables.test = "Active NPCs: <br>" + DOL3D.DescribeNPCs();
			let camera = new THREE.PerspectiveCamera( 70, DOL3D.CombatWidth / DOL3D.CombatHeight, 0.001, 2000 );
			
			camera.position.z = 1;
			let scene = new THREE.Scene();
	
			let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
			let material = new THREE.MeshNormalMaterial();
	
			let mesh = new THREE.Mesh( geometry, material );
			scene.add( mesh );
	
			let renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setSize( DOL3D.CombatWidth, DOL3D.CombatHeight );
			renderer.setAnimationLoop( animation );
			$(output).append( renderer.domElement );


		};
		DOL3D.ShowCombat = function (output) {
			ShowCombat(output);
		};
})));