import { DeIdentifiedValue } from "../domain/DeIdentifiedValue";
import { Logger } from "@nestjs/common";

export class IdentificationService {
  store(value: DeIdentifiedValue): void {
    Logger.log(`Save value in identification store ${value.identifier}`);
  }
}
