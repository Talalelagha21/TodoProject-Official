import React from "react";
import {
    CanvasPath,
    ReactSketchCanvas,
    ReactSketchCanvasProps,
    ReactSketchCanvasRef,
} from "react-sketch-canvas";


type Handlers = [string, () => void, string][];

export interface InputFieldProps {
    fieldName: keyof ReactSketchCanvasProps;
    type?: string;
    canvasProps: Partial<ReactSketchCanvasProps>;
    setCanvasProps: React.Dispatch<
        React.SetStateAction<Partial<ReactSketchCanvasProps>>
    >;
}


function App() {
    const [canvasProps, setCanvasProps] = React.useState<
        Partial<ReactSketchCanvasProps>
    >({
        className: "react-sketch-canvas",
        width: "100%",
        height: "275px",
        strokeWidth: 4,
        eraserWidth: 7,
        strokeColor: "#000000",
        canvasColor: "#FFFFFF",
        style: { border: "1px solid #CCC" },
        svgStyle: {},
        allowOnlyPointerType: "all",

    });



    const canvasRef = React.createRef<ReactSketchCanvasRef>();
    const [paths, setPaths] = React.useState<CanvasPath[]>([]);
    const [lastStroke, setLastStroke] = React.useState<{
        stroke: CanvasPath | null;
        isEraser: boolean | null;
    }>({ stroke: null, isEraser: null });

    const penHandler = () => {
        const eraseMode = canvasRef.current?.eraseMode;
        if (eraseMode) {
            eraseMode(false);
        }
    };

    const eraserHandler = () => {
        const eraseMode = canvasRef.current?.eraseMode;
        if (eraseMode) {
            eraseMode(true);
        }
    };

    const clearHandler = () => {
        const clearCanvas = canvasRef.current?.clearCanvas;
        if (clearCanvas) {
            clearCanvas();
        }
    };


    const createButton = (
        label: string,
        handler: () => void,
    ) => (
        <button
            key={label}
            className={`h-8 bg-red-400 rounded-lg content-center`}
            type="button"
            onClick={handler}
        >
            <div className="pr-2 pl-2">
                {label}
            </div>

        </button>
    );

    const buttonsWithHandlers: Handlers = [
        ["Clear All", clearHandler, "primary"],
        ["Pen", penHandler, "secondary"],
        ["Eraser", eraserHandler, "secondary"],
    ];

    const onChange = (updatedPaths: CanvasPath[]): void => {
        setPaths(updatedPaths);
    };

    return (
        <main className="">
            <div className="">
                <ReactSketchCanvas
                    ref={canvasRef}
                    onChange={onChange}
                    onStroke={(stroke, isEraser) =>
                        setLastStroke({ stroke, isEraser })
                    }
                    {...canvasProps}
                />
            </div>
            <div className="flex space-x-3 justify-center pt-4">
                {buttonsWithHandlers.map(([label, handler, themeColor]) =>
                    createButton(label, handler)
                )}
            </div>

        </main>
    );
}

export default App;