import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateConv",
})
export class ConvertDate implements PipeTransform {
  transform(time: { seconds: number, nanoseconds: number }): Date {
    return new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
  }
}
