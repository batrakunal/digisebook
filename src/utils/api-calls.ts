import Axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const axios: AxiosInstance = Axios.create({
	baseURL: process.env.DIGITAL_SE_CMS_ENDPOINT,
});

export const handleError = (error: any | AxiosError) => {
	if (error.response?.data?.message) return error.response.data.message;
	if (error.message) return error.message;
	return error;
};

export const GET = async <T = any>(
	endpoint: string,
	params = {},
	headers = {}
): Promise<AxiosResponse<T>["data"]> => {
	const { data } = await axios.get<T>(endpoint, { params, headers });
	return data;
};

export const POST = async (
	endpoint: string,
	body = {},
	params = {},
	headers = {}
): Promise<AxiosResponse["data"]> => {
	const { data } = await axios.post(endpoint, body, {
		params,
		headers,
	});
	return data;
};

export const PUT = async (
	endpoint: string,
	body = {},
	params = {},
	headers = {}
): Promise<AxiosResponse["data"]> => {
	const { data } = await axios.put(endpoint, body, {
		params,
		headers,
	});
	return data;
};

export const PATCH = async (
	endpoint: string,
	body = {},
	params = {},
	headers = {}
): Promise<AxiosResponse["data"]> => {
	const { data } = await axios.patch(endpoint, body, {
		params,
		headers,
	});
	return data;
};

export const DELETE = async (
	endpoint: string,
	body = {},
	params = {},
	headers = {}
): Promise<AxiosResponse["data"]> => {
	const { data } = await axios.delete(endpoint, {
		data: body,
		params,
		headers,
	});
	return data;
};
