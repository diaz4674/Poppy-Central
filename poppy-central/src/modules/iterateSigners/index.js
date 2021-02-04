export const iterateSigners = (totalSigners, Signers) => {
	let signers = {}

	for (let i = 1; i < totalSigners + 1; i++) {
		if (Signers[`signer${+i}`] === undefined) {
			return alert("Sorry looks like your still missing some info")
		}
		signers[`signer${+i}`] = Signers[`signer${+i}`]
	}

	return signers
}
