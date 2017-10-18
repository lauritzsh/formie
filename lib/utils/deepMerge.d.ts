declare const deepMerge: <T, U>(mapper: <L, R>(left: L, right: R) => any, target: {
    [K in keyof T]: T[K];
}, source: {
    [K in keyof U]: U[K];
}) => any;
export default deepMerge;
