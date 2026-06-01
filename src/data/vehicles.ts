// Edit this file to update the 10 vehicles shown on the homepage.
// Replace the imported image with any file under src/assets/ to swap pictures.
import v1 from "@/assets/v1.jpg";
import v2 from "@/assets/v2.jpg";
import v3 from "@/assets/v3.jpg";
import v4 from "@/assets/v4.jpg";
import v5 from "@/assets/v5.jpg";
import v6 from "@/assets/v6.jpg";
import v7 from "@/assets/v7.jpg";
import v8 from "@/assets/v8.jpg";
import v9 from "@/assets/v9.jpg";
import v10 from "@/assets/v10.jpg";

export type Vehicle = {
  id: number;
  image: string;
  name: string;
  year: number;
  mileage: string; // e.g. "45.000"
  currentBid: string; // e.g. "R$ 48.500"
  status: "Aberto" | "Encerrando em breve" | "Novo" | "Destaque";
};

export const vehicles: Vehicle[] = [
  { id: 1, image: v1, name: "Fiat Endurance 1.3 Flex 8v Cs", year: 2025, mileage: "47.00", currentBid: "R$ 28.500", status: "Destaque" },
  { id: 2, image: v2, name: "Fiat Strada Working Hard 1.4", year: 2020, mileage: "72.300", currentBid: "R$ 17.900", status: "Aberto" },
  { id: 3, image: v3, name: "Chevrolet Montana 1.4 8V Conquest", year: 2010, mileage: "184.430", currentBid: "R$ 7.200", status: "Encerrando em breve" },
  { id: 4, image: v4, name: "Mercedes ls 1634", year: 2009, mileage: "495.400", currentBid: "R$ 65.000", status: "Aberto" },
  { id: 5, image: v5, name: "Hyundai HB20 C./c.plus/c.style 1.6", year: 2013, mileage: "109.200", currentBid: "R$ 12.700", status: "Novo" },
  { id: 6, image: v6, name: "Volkswagen T-Cross Comfortline 1.0 TSI", year: 2025, mileage: "54.200", currentBid: "R$ 38.500", status: "Aberto" },
  { id: 7, image: v7, name: "Volkswagen Nivus Highline 1.0 200 TSI", year: 2025, mileage: "37.900", currentBid: "R$ 56.300", status: "Novo" },
  { id: 8, image: v8, name: "Fiat Strada Freedom 1.3 Flex", year: 2024, mileage: "82.400", currentBid: "R$ 39.800", status: "Aberto" },
  { id: 9, image: v9, name: "Toyota Corolla 2.0 XEI 16V Flex 4P Automatico", year: 2023, mileage: "48.600", currentBid: "R$ 51.000", status: "Destaque" },
  { id: 10, image: v10, name: "Fiat Fiorino Endurance EVO", year: 2024, mileage: "57.000", currentBid: "R$ 39.000", status: "Encerrando em breve" },
];
