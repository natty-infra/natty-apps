import React, { ReactNode, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as three from "three";

function CModel(props: {
    path: string
})
{
    const gltf = useGLTF(props.path);

    const ref = useRef<three.Group>();

    useFrame(() => {
        if (!ref.current)
            return;

        ref.current.rotation.y += 0.01;
    });

    return (
        <group dispose={null} ref={ref}>
            <primitive object={gltf.scene} />
        </group>
    );
}


class CModelView extends React.Component<{
    path: string,
    zoom: number | null
}>
{
    render(): ReactNode
    {
        const zoom = this.props.zoom || 1.0;

        return (
            <Canvas camera={{ position: [0, 2.5 * zoom, -5 * zoom] }}>
                <ambientLight intensity={0.35} />
                <spotLight intensity={1.0} angle={1} penumbra={0.5} position={[0, 0, -10 * zoom]} />
                <Suspense fallback={null}>
                    <CModel path={this.props.path} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        );
    }
}

export default CModelView;
