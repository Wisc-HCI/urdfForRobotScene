/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import respeaker_base from './respeaker_base.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(respeaker_base);
  return [{type:'raw', geometry:nodes.respeaker_base.geometry, material: nodes.respeaker_base.material}]
  
}
useGLTF.preload(respeaker_base)