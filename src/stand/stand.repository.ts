import { EntityRepository, Repository } from 'typeorm';
import { CreatStandDto } from './dto/stand.dto';
import { Stand } from './stand.entity';

@EntityRepository(Stand)
export class StandRepository extends Repository<Stand> {
  async createStand(standDto: CreatStandDto): Promise<string> {
    const {
      id,
      food_stand,
      contact_number,
      coordinates,
      ownerId,
      description,
      status,
      address,
      type,
    } = standDto;
    const stand = this.create(); //new Stand();
    (stand.id = id),
      (stand.food_stand = food_stand),
      (stand.contact_number = contact_number),
      (stand.coordinates = coordinates),
      (stand.address = address),
      (stand.status = status),
      (stand.ownerId = 123),
      (stand.description = description),
      (stand.type = type);

    try {
      await stand.save();
      return 'New Stand Created';
    } catch (error) {
      console.log(error);
    }
  }
}
