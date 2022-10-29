import { BaseTransformer } from "src/transformer.base"
export class ActivitesTransformer extends BaseTransformer {

    static singleTransform (element) {
        return {
            created_at: element.created_at ?? null,
            updated_at: element.updated_at ?? null,
            id: element.id,
            title: element.title,
            email: element.email,
        }
    }
}