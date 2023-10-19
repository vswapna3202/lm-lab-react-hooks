import { useState, useMemo } from 'react';

export const MemoExample = () => {

	console.log("Rendering component...")

	const [numberObjThree, setNumberObjThree] = useState({ input: 0 });
	const [numberObjTwo, setNumberObjTwo] = useState({ input: 0 });
	//const doubleNumber = slowFunction(numberObj.input)
	const doubleNumberThree = useMemo(() => { 
			return slowFunction(numberObjThree.input)
		}, [numberObjThree.input] 
	);
	const doubleNumberTwo = useMemo(() => { 
		return slowFunction(numberObjTwo.input)
	}, [numberObjTwo.input] 
);

	return (
		<>
			<h2>useMemo</h2>

			<button onClick={() => setNumberObjThree({ input: 3 })}>Double 3</button>
			<button onClick={() => setNumberObjTwo({input: 2})}>Double 2</button>
			<p className='use-memo__text'>{doubleNumberThree}</p>
			<p className='use-memo__text'>{doubleNumberTwo}</p>
		</>
	);
};

function slowFunction(num: number) {
	console.log('calling slow function... 🐌');
	for (let i = 0; i <= 1000000000; i++) {
		// ⏰
	}
	const result = num * 2;
	console.log(num);
	console.log(`result: ${result}`);
	return result;
}
