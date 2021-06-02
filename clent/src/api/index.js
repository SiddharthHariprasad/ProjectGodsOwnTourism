import axios from 'axios';

const url = 'https://gods-own-tourism-backend.herokuapp.com/';

export const fetchPacks = () => axios.get(url + 'packs');
export const createPack = (newPack) => axios.post(url + 'packs', newPack);
export const updatePack = (id, updatedPack) => axios.patch(url + 'packs/' + id, updatedPack);
export const deletePack = (id) => axios.delete(url + 'packs/' +  id);

export const fetchTickets = () => axios.get(url + 'tickets');
export const createTicket = (newTicket) => axios.post(url + 'tickets', newTicket);
export const updateTicket = (id, updatedTicket) => axios.patch(url + 'tickets/' + id, updatedTicket);
export const deleteTicket = (id) => axios.delete(url + 'tickets/' +  id);

export const fetchHotels = () => axios.get(url + 'hotels');
export const createHotel = (newHotel) => axios.post(url + 'hotels', newHotel);
export const updateHotel = (id, updatedHotel) => axios.patch(url + 'hotels/' + id, updatedHotel);
export const deleteHotel = (id) => axios.delete(url + 'hotels/' +  id);

export const fetchCabs = () => axios.get(url + 'cabs');
export const createCab = (newCab) => axios.post(url + 'cabs', newCab);
export const updateCab = (id, updatedCab) => axios.patch(url + 'cabs/' + id, updatedCab);
export const deleteCab = (id) => axios.delete(url + 'cabs/' +  id);

export const fetchGuides = () => axios.get(url + 'guides');
export const createGuide = (newGuide) => axios.post(url + 'guides', newGuide);
export const updateGuide = (id, updatedGuide) => axios.patch(url + 'guides/' + id, updatedGuide);
export const deleteGuide = (id) => axios.delete(url + 'guides/' +  id);

export const fetchUsers = () => axios.get(url + 'users');
export const createUser = (newUser) => axios.post(url + 'users', newUser);
export const updateUser = (id, updatedUser) => axios.patch(url + 'users/' + id, updatedUser);
export const deleteUser = (id) => axios.delete(url + 'users/' +  id);

export const fetchCarts = () => axios.get(url + 'carts');
export const createCart = (newCart) => axios.post(url + 'carts', newCart);
export const updateCart = (id, updatedCart) => axios.patch(url + 'carts/' + id, updatedCart);
export const deleteCart = (id) => axios.delete(url + 'carts/' +  id);

export const fetchOrders = () => axios.get(url + 'orders');
export const createOrder = (newOrder) => axios.post(url + 'orders', newOrder);
export const updateOrder = (id, updatedOrder) => axios.patch(url + 'orders/' + id, updatedOrder);
export const deleteOrder = (id) => axios.delete(url + 'orders/' +  id);