import axios from 'axios';

interface Address {
    ligne_1: string;
    ligne_2: string;
    code_postal: string;
}

interface AssureSocial {
    nom: string;
    prenom: string;
    adresse: Address;
}

interface Malade {
    type_relation: string;
    prenom: string;
    nom: string;
    date_naissance: string;
    telephone: string;
    signature: string | null;
}

interface Metadata {
    identifiant_unique: string;
    regime: string[];
}

interface ExtractedData {
    document_type: string;
    metadata: Metadata;
    assure_social: AssureSocial;
    Le_malade: Malade;
}

export interface ExtractionResponse {
    id: number;
    created_at: string;
    file_name: string;
    extracted_data: ExtractedData;
    confidence_score: number;
    document_type: string;
}

export async function submitFilledFormImage(file: File) {
    const formData = new FormData();
    formData.append('filled_form', file);

    try {
        const response = await axios.post<ExtractionResponse>(
            'https://arsiiprod-production.up.railway.app/extract',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        console.log('Response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error uploading form:', error);
        throw error;
    }
}
