import { Customer } from "../asset/definitions";

class ServerStore{

    private _serverList:Record<string, Customer>;
    
    constructor()
    {
       this._serverList = {};
    }
    
    addItem(key:string,customer:Customer)
    {
        if(!key) throw Error("Invalid key");
        this._serverList[key] = customer;
    }
    getItem(key:string): Customer | undefined
    {
        if(!key) throw Error("Invalid key");
        return this._serverList[key];
    }
    removeItem(key:string): void
    {
        if(!key) throw Error("Invalid key");
        delete this._serverList[key];
    }
    clear(): void
    {
        this._serverList = {};
    }
    isKeyPresent(key:string):boolean
    {
        if(!key) throw Error("Invalid key");
        return key in this._serverList;
    }

}
export default new ServerStore();