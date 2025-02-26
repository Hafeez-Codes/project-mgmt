import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            id
            name
            status
        }
    }
`;

export const GET_PROJECT_BY_ID = gql`
    query GetProjectById($id: ID!) {
        project(id: $id) {
            id
            name
            description
            status
        }
    }
`;

export const CREATE_PROJECT = gql`
    mutation CreateProject($name: String!, $description: String!, $status: String!) {
        createProject(name: $name, description: $description, status: $status) {
            id
            name
            description
            status
        }
    }
`;

export const UPDATE_PROJECT = gql`
    mutation UpdateProject($id: ID!, $name: String, $description: String, $status: String) {
        updateProject(id: $id, name: $name, description: $description, status: $status) {
            id
            name
            description
            status
        }
    }
`;

export const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }
`;