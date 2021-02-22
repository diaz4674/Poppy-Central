export const iterateSigners = (totalSigners, Signers) => {
    let signers = {}
    for (let i = 1; i < totalSigners + 1; i++) {
        // check to see if filled in signers match up the total signers stated
        if (Signers[`signer${+i}`] === undefined) {
            return alert("Sorry looks like your still missing some info")
        }
        // creates signer object key as signer1, signer2, etc...needed to send to backend
        signers[`signer${+i}`] = Signers[`signer${+i}`]
    }

    return signers
}
