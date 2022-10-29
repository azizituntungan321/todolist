import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity("activites")
export class ActivitesEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column() 
    email:string;

    @Column({ length: 600 })
    title:string;
    
    @CreateDateColumn()
    created_at: Date;
        
    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}