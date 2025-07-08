import stableStringify from "fast-json-stable-stringify";

let wrapSigned = async (msg, sigPrivkey, sigPubkey) => {
    let signature = sign(stableStringify({ msg, signer: sigPubkey }), sigPrivkey);
    return { signer: sigPubkey, msg, signature };
};

let unwrapSigned = async msg => {
    assert(getSignatureValidity(stableStringify({ msg: msg.msg, signer: msg.signer }), msg.signer, msg.signature));
    return msg.msg;
};

let broadcast = async receiver => {

};

let broadcastAll = async receivers => {
    await Promise.all(receivers.map(receiver => broadcast(receiver)));
};

listen(encryptedMsg => {
    let decryptedMsg = decrypt(encryptedMsg, selfPrivkey);
    if (decryptedMsg.broadcast) {

    } else if (decryptedMsg.poll) {

    }
    assert(validSigners.contains(outerMsg.signer)); // i may not need this in some network configurations
    let innerMsg = await unwrapSigned(outerMsg);
    let text = await unwrapSigned(innerMsg);
});
