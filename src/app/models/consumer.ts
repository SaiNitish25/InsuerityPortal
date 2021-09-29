import { Business } from "./business";

export class Consumer {
    constructor(
        consumerName: string,
        consumerId: string,
        //consumerDOB: Date,
        consumerEmail: string,
        consumerPan: string,
        agentId: number,
        agentName:string,
        business: Business
    ) {}
}
