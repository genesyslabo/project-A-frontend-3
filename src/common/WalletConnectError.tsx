export enum WalletConnectErrorType {
    ChainIdNotMatch,
    NoWalletFound,
    UserCanceled
}

export class WalletConnectError {

    static NoWalletFound = new WalletConnectError("No Wallet Found", WalletConnectErrorType.NoWalletFound);
    static UserCanceled = new WalletConnectError("User Canceled", WalletConnectErrorType.UserCanceled);
    static ChainIdNotMatch = new WalletConnectError("Please switch to BSC Chain", WalletConnectErrorType.ChainIdNotMatch);
    public message: string;
    public type: WalletConnectErrorType;

    constructor(m: string, type: WalletConnectErrorType) {
        this.message = m;
        this.type = type;
    }

}


