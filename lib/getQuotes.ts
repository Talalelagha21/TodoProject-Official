

export const getQuotes = async (): Promise<Quotes[]> => {
    const res = await fetch(`https://zenquotes.io/api/today`,  {cache: 'no-store'});
    const quotes = await res.json();
    return quotes
}