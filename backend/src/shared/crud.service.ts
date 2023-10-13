import { NotFoundException } from '@nestjs/common';
import { DeepPartial, FindManyOptions, Repository } from 'typeorm';

export class CrudService<TEntity> {
  constructor(protected repository: Repository<TEntity>) {}
  async create(data: DeepPartial<TEntity>) {
    return this.repository.save(data);
  }

  async find(options: FindManyOptions<TEntity>) {
    return this.repository.find(options);
  }

  async count(query: FindManyOptions<TEntity>) {
    return this.repository.count(query);
  }

  async findOne(query: FindManyOptions<TEntity>) {
    const instance = await this.repository.findOne(query);

    if (!instance) {
      throw new NotFoundException(`Entity not found`);
    }

    return instance;
  }

  // async findById(id: number) {
  //   return await this.repository.findOne({ where: { id } });
  // }

  async updateOne(
    query: FindManyOptions<TEntity> | any,
    data: Partial<TEntity> | any,
  ) {
    const instance = await this.findOne(query);

    if (!Object.keys(data).length) {
      return instance;
    }

    return await this.repository.update(query, data);
  }

  async deleteOne(query: FindManyOptions<TEntity>) {
    return await this.updateOne(query, {
      is_deleted: true,
    });
  }
}
