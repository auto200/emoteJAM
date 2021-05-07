// import { useRef } from "react";
// import { Filter } from "../filters";

// interface Props {
//     filter:Filter
// }

// const Preview: React.FC<Props> = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [webGlError, setWebGlError] = useState<string>("");
//   const [gl, setGl] = useState<WebGLRenderingContext>();
//   const programRef = useRef<Program | null>();

//   useEffect(() => {
//     const gl = canvasRef.current?.getContext("webgl", {
//       antialias: false,
//       alpha: false,
//     });
//     if (!gl) {
//       setWebGlError("Could not initialize WebGL context");
//       return;
//     }
//     setGl(gl);

//     gl.enable(gl.BLEND);
//     gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

//     const program = loadFilterProgram(
//       gl,
//       filters[currentFilterName],
//       vertexAttribs
//     );
//     programRef.current = program;

//     // Mesh Position
//     {
//       const meshPositionBufferData = new Float32Array(
//         TRIANGLE_PAIR * TRIANGLE_VERTICIES * VEC2_COUNT
//       );
//       for (let triangle = 0; triangle < TRIANGLE_PAIR; ++triangle) {
//         for (let vertex = 0; vertex < TRIANGLE_VERTICIES; ++vertex) {
//           const quad = triangle + vertex;
//           const index =
//             triangle * TRIANGLE_VERTICIES * VEC2_COUNT + vertex * VEC2_COUNT;
//           meshPositionBufferData[index + VEC2_X] = 2 * (quad & 1) - 1;
//           meshPositionBufferData[index + VEC2_Y] = 2 * ((quad >> 1) & 1) - 1;
//         }
//       }

//       const meshPositionBuffer = gl.createBuffer();
//       gl.bindBuffer(gl.ARRAY_BUFFER, meshPositionBuffer);
//       gl.bufferData(gl.ARRAY_BUFFER, meshPositionBufferData, gl.STATIC_DRAW);

//       const meshPositionAttrib = vertexAttribs["meshPosition"];
//       gl.vertexAttribPointer(
//         meshPositionAttrib,
//         VEC2_COUNT,
//         gl.FLOAT,
//         false,
//         0,
//         0
//       );
//       gl.enableVertexAttribArray(meshPositionAttrib);
//     }

//     let start: number;
//     const step = (timestamp: number) => {
//       if (!programRef.current || !canvasRef.current) return;
//       if (start === undefined) {
//         start = timestamp;
//       }
//       start = timestamp;

//       gl.uniform1f(programRef.current.timeUniform, start * 0.001);
//       gl.uniform2f(
//         programRef.current.resolutionUniform,
//         canvasRef.current.width,
//         canvasRef.current.height
//       );

//       gl.clearColor(0.0, 1.0, 0.0, 1.0);
//       gl.clear(gl.COLOR_BUFFER_BIT);

//       gl.drawArrays(gl.TRIANGLES, 0, TRIANGLE_PAIR * TRIANGLE_VERTICIES);

//       window.requestAnimationFrame(step);
//     };

//     window.requestAnimationFrame(step);
//   }, []);

//   return null;
// };

// export default Preview;
