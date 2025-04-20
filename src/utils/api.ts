import axios from 'axios';

export async function submitFilledFormImage(file: File) {
    const formData = new FormData();
    formData.append('filled_form', file);

    try {
        const response = await axios.post('http://localhost:8000/extract', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('Response:', response.data);
        
return response.data;
    } catch (error) {
        console.error('Error uploading form:', error);
        throw error;
    }
}
