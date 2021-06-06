import { Specification } from "../../model/Specification";
import { ISpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
    
    create({ description, name }: ISpecificationDTO): void {
        const specification = new Specification();  
        
        Object.assign(specification, { 
            description, 
            name,
            create_at: new Date()
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name)
        return specification;
    }
}

export { SpecificationsRepository }