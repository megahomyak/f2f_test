listen(msg => {
    msg = decrypt(msg, selfPrivkey);
    assert(validSenders.contains(msg.sender)); // i may not need this in some network configurations
    msg = unwrapSigned(msg); // checks for signature correctness: arg={ msg, signature, sender } -> assert stringifyStable({sender, msg}) == signature -> return msg;
});
