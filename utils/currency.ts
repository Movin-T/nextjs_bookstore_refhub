// Convert the amount stored in cents to rupees.
export const convertCentsToRupees = (cents: number): string => {
    return `Rs. ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}