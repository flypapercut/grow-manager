export interface Seed {
	id: string;
	mother_id?: string;
	father_id?: string;
	collected_date?: string;
	name: string;
	events?: [];
	created_at: string;
	updated_at: string;
}
