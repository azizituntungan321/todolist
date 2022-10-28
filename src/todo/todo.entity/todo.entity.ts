import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class TodoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 600 })
    title:string;
    
    @Column() 
    priority:string;

    @Column() 
    activity_group_id:string;

    @Column() 
    is_active:boolean;

    @CreateDateColumn()
    created_at: Date;
        
    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}