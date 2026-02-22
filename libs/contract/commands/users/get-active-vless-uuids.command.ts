import { z } from 'zod';

import { getEndpointDetails } from '../../constants';
import { REST_API, USERS_ROUTES } from '../../api';

export namespace GetActiveVlessUuidsCommand {
    export const url = REST_API.USERS.ACTIVE_VLESS_UUIDS;
    export const TSQ_url = url;

    export const endpointDetails = getEndpointDetails(
        USERS_ROUTES.ACTIVE_VLESS_UUIDS,
        'get',
        'Get VLESS UUIDs of all active users',
    );

    export const ResponseSchema = z.object({
        response: z.object({
            uuids: z.array(z.string()),
        }),
    });

    export type Response = z.infer<typeof ResponseSchema>;
}
