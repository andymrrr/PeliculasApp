export class Formato {
    public static Divisa  (cantidad: number): string {
        return new Intl.NumberFormat("es-us",{
            style: "currency",
            currency:"USD"

        }).format(cantidad);
    }
}