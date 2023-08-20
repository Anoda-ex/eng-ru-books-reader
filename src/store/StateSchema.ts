import { AuthSchema } from './Auth/AuthSchema';
import { SettingsSchema } from './Settings/SettingsSchema';

export interface StateSchema{
    auth: AuthSchema,
    settings: SettingsSchema
}