import { BaseTransformer } from "src/transformer.base"
export class TodoTransformer extends BaseTransformer {

    static singleTransform (element) {
        return {
            created_at: element.created_at,
            updated_at: element.updated_at,
            id: element.id,
            title: element.title,
            priority: element.priority,
            activity_group_id: element.activity_group_id,
            is_active: element.is_active,
        }
    }
}