import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IPerson from "../models/IPerson";
import ISuccessResponse from "../models/ISuccessResponse";
import IPersonFormatted from "../models/IPersonFormatted";
import ICompany from "../models/ICompany";
import IExperience from "../models/IExperience";

const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        getPersons: builder.query<IPersonFormatted[], void>({
            query: () => ({
                url: `/persons`
            })
        }),
        getCompanies: builder.query<ICompany[], void>({
            query: () => ({
                url: `/companies`
            })
        }),
        createPerson: builder.mutation<ISuccessResponse, IPerson>({
            query: (person) => ({
                url: `/persons`,
                method: 'POST',
                body: person
            }),
        }),
        createExperience: builder.mutation<ISuccessResponse, IExperience>({
            query: (experience) => ({
                url: `/experiences`,
                method: 'POST',
                body: experience
            }),
        })
    }),
});

export const { useGetPersonsQuery, useGetCompaniesQuery, useCreatePersonMutation, useCreateExperienceMutation } = mainApi;

export default mainApi;