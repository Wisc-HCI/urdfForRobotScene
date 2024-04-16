/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_gripper from './link_gripper.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_gripper);
  return [{type:'raw', geometry:nodes.link_gripper.geometry, material: nodes.link_gripper.material}]
  
}
useGLTF.preload(link_gripper)