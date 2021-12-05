import { OrderLine } from "./OrderLine";

export interface Order {
    reference: string;
    orderDate: string;
    deliveryDate: string;
    price: number;
    //orderLines: OrderLine[];
    urgent: Boolean;
}