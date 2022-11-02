import { DeIdentifiedValue } from "../domain/DeIdentifiedValue";
import { Logger } from "@nestjs/common";

export class IdentificationService {
  deIdentify(value: DeIdentifiedValue): void {
    Logger.log(`Save value in identification store ${value.identifier}`);
  }
}
