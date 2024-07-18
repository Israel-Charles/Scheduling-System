import { ForgotFormData } from "./pages/ForgotPassword";
import { ResetFormData } from "./pages/ResetPassword";
import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
// import {
// 	ResourceSearchResponse,
// 	ResourceType,
// } from "../../backend/src/types/resource";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
	const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});

	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(responseBody.message);
	}

	return responseBody;
};

export const signIn = async (formData: SignInFormData) => {
	const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});

	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(responseBody.message);
	}

	return responseBody;
};

export const verifyEmail = async (verificationToken: string) => {
	const response = await fetch(
		`${API_BASE_URL}/api/auth/email/verify/${verificationToken}`,
		{
			method: "GET",
		}
	);

	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(responseBody.message);
	}

	return responseBody;
};

export const forgotPassword = async (formData: ForgotFormData) => {
	const response = await fetch(`${API_BASE_URL}/api/auth/password/forgot`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});

	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(responseBody.message);
	}

	return responseBody;
};

export const resetPassword = async (
	resetToken: string,
	formData: ResetFormData
) => {
	const response = await fetch(
		`${API_BASE_URL}/api/auth/password/reset/${resetToken}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		}
	);

	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(responseBody.message);
	}

	return responseBody;
};

export const authenticate = async () => {
	const response = await fetch(`${API_BASE_URL}/api/auth/`, {
		method: "GET",
		credentials: "include",
	});

	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(responseBody.message);
	}

	return responseBody;
};

export const signOut = async () => {
	const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
		method: "GET",
		credentials: "include",
	});

	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(responseBody.message);
	}

	return responseBody;
};

// export const addMyResource = async (resourceFormData: FormData) => {
// 	const response = await fetch(`${API_BASE_URL}/api/my-resources`, {
// 		method: "POST",
// 		credentials: "include",
// 		body: resourceFormData,
// 	});

// 	const responseBody = await response.json();

// 	if (!response.ok) {
// 		throw new Error(responseBody.message);
// 	}

// 	return responseBody;
// };

// export const getMyResources = async (): Promise<ResourceType[]> => {
// 	const response = await fetch(`${API_BASE_URL}/api/my-resources`, {
// 		credentials: "include",
// 	});

// 	if (!response.ok) {
// 		throw new Error("Error fetching resources");
// 	}

// 	return response.json();
// };

// export const getMyResourceById = async (
// 	resourceId: string
// ): Promise<ResourceType> => {
// 	const response = await fetch(
// 		`${API_BASE_URL}/api/my-resources/${resourceId}`,
// 		{
// 			credentials: "include",
// 		}
// 	);

// 	if (!response.ok) {
// 		throw new Error("Error fetching resource");
// 	}

// 	return response.json();
// };

// export const updateMyResourceById = async (resourceFormData: FormData) => {
// 	const response = await fetch(
// 		`${API_BASE_URL}/api/my-resources/${resourceFormData.get("resourceId")}`,
// 		{
// 			method: "PUT",
// 			credentials: "include",
// 			body: resourceFormData,
// 		}
// 	);

// 	const responseBody = await response.json();

// 	if (!response.ok) {
// 		throw new Error(responseBody.message);
// 	}

// 	return responseBody;
// };

// export const deleteResource = async (resourceId: string) => {
// 	const response = await fetch(
// 		`${API_BASE_URL}/api/my-resources/delete/${resourceId}`,
// 		{
// 			method: "DELETE",
// 			credentials: "include",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		}
// 	);

// 	const responseBody = await response.json();

// 	if (!response.ok) {
// 		throw new Error(responseBody.message);
// 	}

// 	return responseBody;
// };

// export type SearchParams = {
// 	name?: string;
// 	location?: string;
// 	maxResLen?: number;
// 	maxResSize?: number;
// 	type?: string;
// 	open?: string;
// 	close?: string;
// 	days?: string[];
// 	page?: string;
// };

// export const searchResources = async (
// 	searchParams: SearchParams
// ): Promise<ResourceSearchResponse> => {
// 	const queryParams = new URLSearchParams();
// 	queryParams.append("name", searchParams.name || "");
// 	queryParams.append("location", searchParams.location || "");
// 	queryParams.append("maxResLen", searchParams.maxResLen.toString() || "");
// 	queryParams.append("maxResSize", searchParams.maxResSize.toString() || "");
// 	queryParams.append("type", searchParams.type || "");
// 	queryParams.append("open", searchParams.open || "");
// 	queryParams.append("close", searchParams.close || "");
// 	queryParams.append("days", searchParams.days.join(",") || "");
// 	queryParams.append("page", searchParams.page || "");

// 	const response = await fetch(
// 		`${API_BASE_URL}/api/resources/search?${queryParams}`
// 	);

// 	if (!response.ok) {
// 		throw new Error("Failed to search resources");
// 	}

// 	return response.json();
// };
