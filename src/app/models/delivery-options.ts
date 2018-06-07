export class DeliveryOptions {
  public id: string;
  public name: string;
  public description: string;
  public priceDelivery: number;

  public updateFrom(src: DeliveryOptions): void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.priceDelivery = src.priceDelivery;
  }
}
