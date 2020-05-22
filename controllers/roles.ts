import {
    v4
} from 'https://deno.land/std/uuid/mod.ts';
import {
    roles
} from '../db/data.ts';

export const getRoles = ({
    response
}: {
    response: any
}) => {
    response.body = roles;
};

