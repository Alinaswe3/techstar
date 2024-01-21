import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const newContactSchema = z.object({
	name: z.string().min(2, 'Name is required'),
	email: z.string().min(3, 'Email is required').email('Invalid email'),
	message: z.string().min(2, 'Message is required')
});
export const load = async (event: any) => {
	const form = await superValidate(event, newContactSchema);
	return {
		form
	};
};
export const actions = {
	default: async (event: any) => {
		const form = await superValidate(event, newContactSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	}
};
