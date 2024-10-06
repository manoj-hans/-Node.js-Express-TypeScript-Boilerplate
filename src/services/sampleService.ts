import { AppDataSource } from "../data-source";
import { Sample } from "../entity/Sample";

export class SampleService {
  private sampleRepository = AppDataSource.getRepository(Sample);

  async createSample(
    name: string,
    description: string,
    password: string
  ): Promise<Sample> {
    const sample = this.sampleRepository.create({
      name,
      description,
      password,
    });
    return this.sampleRepository.save(sample);
  }

  async getSampleById(id: number): Promise<Sample | null> {
    return this.sampleRepository.findOneBy({ id });
  }

  async updateSample(
    id: number,
    name: string,
    description: string
  ): Promise<Sample | null> {
    const sample = await this.sampleRepository.findOneBy({ id });
    if (!sample) return null;

    sample.name = name;
    sample.description = description;
    return this.sampleRepository.save(sample);
  }

  async deleteSample(id: number): Promise<boolean> {
    const result = await this.sampleRepository.delete(id);
    return result.affected !== 0;
  }
}
