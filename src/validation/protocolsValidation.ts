import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Protocols } from 'src/swap/entity/dto/swap.dto';

@ValidatorConstraint({ name: 'protocolsValidation', async: false })
export class ProtocolsValidation implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    const values = Object.values(Protocols);
    return values.includes(value);
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'protocols must be SWAP or UNISWAP_V2';
  }
}
