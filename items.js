
// ==========================================
// BASE DE DATOS DE RECETAS - ALBION HUB
// ==========================================
const RECIPES_DB = [
  // --- ESPADAS ---
  { id: "MAIN_SWORD", name: "Espada Ancha", type: "dynamic", m1: "PLANKS", q1: 8, m2: "METALBAR", q2: 16, city: "Lymhurst" },
  { id: "2H_CLAYMORE", name: "Claymore", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, city: "Lymhurst" },
  { id: "2H_DUALSWORD", name: "Espadas Dobles", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, city: "Lymhurst" },
  { id: "MAIN_SCIMITAR_MORGANA", name: "Espada de Clarent", type: "dynamic", m1: "PLANKS", q1: 8, m2: "METALBAR", q2: 16, m3: "ARTIFACT_MAIN_SCIMITAR_MORGANA", q3: 1, city: "Lymhurst" },
  { id: "2H_CLEAVER_HELL", name: "Espada Tallada", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, m3: "ARTIFACT_2H_CLEAVER_HELL", q3: 1, city: "Lymhurst" },
  { id: "2H_DUALSCIMITAR_UNDEAD", name: "Espadas de Galatina", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, m3: "ARTIFACT_2H_DUALSCIMITAR_UNDEAD", q3: 1, city: "Lymhurst" },
  { id: "MAIN_SWORD_AVALON", name: "Espada de Rey", type: "dynamic", m1: "PLANKS", q1: 8, m2: "METALBAR", q2: 16, m3: "ARTIFACT_MAIN_SWORD_AVALON", q3: 1, city: "Lymhurst" },

  // --- HACHAS ---
  { id: "MAIN_AXE", name: "Hacha de Batalla", type: "dynamic", m1: "PLANKS", q1: 8, m2: "METALBAR", q2: 16, city: "Martlock" },
  { id: "2H_HALBERD", name: "Alabarda", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, city: "Martlock" },
  { id: "2H_AXE", name: "Gran Hacha", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, city: "Martlock" },
  { id: "2H_SCYTHE_HELL", name: "Guadaña Infernal", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, m3: "ARTIFACT_2H_SCYTHE_HELL", q3: 1, city: "Martlock" },
  { id: "2H_DUALAXE_KEEPER", name: "Patas de Oso", type: "dynamic", m1: "PLANKS", q1: 12, m2: "METALBAR", q2: 20, m3: "ARTIFACT_2H_DUALAXE_KEEPER", q3: 1, city: "Martlock" },
  { id: "MAIN_AXE_AVALON", name: "Clamador de la Realidad", type: "dynamic", m1: "PLANKS", q1: 8, m2: "METALBAR", q2: 16, m3: "ARTIFACT_MAIN_AXE_AVALON", q3: 1, city: "Martlock" },

  // --- DAGAS ---
  { id: "MAIN_DAGGER", name: "Daga", type: "dynamic", m1: "LEATHER", q1: 16, m2: "METALBAR", q2: 8, city: "Bridgewatch" },
  { id: "2H_DAGGERPAIR", name: "Dagas Dobles", type: "dynamic", m1: "LEATHER", q1: 20, m2: "METALBAR", q2: 12, city: "Bridgewatch" },
  { id: "2H_CLAWPAIR", name: "Garras", type: "dynamic", m1: "LEATHER", q1: 20, m2: "METALBAR", q2: 12, city: "Bridgewatch" },
  { id: "MAIN_RAPIER_MORGANA", name: "Daga Sangrienta", type: "dynamic", m1: "LEATHER", q1: 16, m2: "METALBAR", q2: 8, m3: "ARTIFACT_MAIN_RAPIER_MORGANA", q3: 1, city: "Bridgewatch" },
  { id: "MAIN_DAGGER_HELL", name: "Sangradora", type: "dynamic", m1: "LEATHER", q1: 16, m2: "METALBAR", q2: 8, m3: "ARTIFACT_MAIN_DAGGER_HELL", q3: 1, city: "Bridgewatch" },
  { id: "2H_DUALDAGGER_AVALON", name: "Acuchilladores Diabólicos", type: "dynamic", m1: "LEATHER", q1: 20, m2: "METALBAR", q2: 12, m3: "ARTIFACT_2H_DUALDAGGER_AVALON", q3: 1, city: "Bridgewatch" },

  // --- ARCOS ---
  { id: "2H_BOW", name: "Arco", type: "dynamic", m1: "PLANKS", q1: 32, city: "Lymhurst" },
  { id: "2H_WARBOW", name: "Arco de Guerra", type: "dynamic", m1: "PLANKS", q1: 32, city: "Lymhurst" },
  { id: "2H_LONGBOW", name: "Arco Largo", type: "dynamic", m1: "PLANKS", q1: 32, city: "Lymhurst" },
  { id: "2H_BOW_HELL", name: "Arco Plañidero", type: "dynamic", m1: "PLANKS", q1: 32, m3: "ARTIFACT_2H_BOW_HELL", q3: 1, city: "Lymhurst" },
  { id: "2H_BOW_KEEPER", name: "Arco de Badon", type: "dynamic", m1: "PLANKS", q1: 32, m3: "ARTIFACT_2H_BOW_KEEPER", q3: 1, city: "Lymhurst" },
  { id: "2H_BOW_AVALON", name: "Arco de Niebla", type: "dynamic", m1: "PLANKS", q1: 32, m3: "ARTIFACT_2H_BOW_AVALON", q3: 1, city: "Lymhurst" },

  // --- ARMADURAS DE PLACA ---
  { id: "ARMOR_PLATE_SET1", name: "Armadura de Soldado", type: "dynamic", m1: "METALBAR", q1: 16, city: "Thetford" },
  { id: "ARMOR_PLATE_SET2", name: "Armadura de Caballero", type: "dynamic", m1: "METALBAR", q1: 16, city: "Thetford" },
  { id: "ARMOR_PLATE_SET3", name: "Armadura de Guardián", type: "dynamic", m1: "METALBAR", q1: 16, city: "Thetford" },
  { id: "ARMOR_PLATE_UNDEAD", name: "Armadura de Sepulturero", type: "dynamic", m1: "METALBAR", q1: 16, m3: "ARTIFACT_ARMOR_PLATE_UNDEAD", q3: 1, city: "Thetford" },
  { id: "ARMOR_PLATE_HELL", name: "Armadura de Demonio", type: "dynamic", m1: "METALBAR", q1: 16, m3: "ARTIFACT_ARMOR_PLATE_HELL", q3: 1, city: "Thetford" },
  { id: "ARMOR_PLATE_KEEPER", name: "Armadura de Juez", type: "dynamic", m1: "METALBAR", q1: 16, m3: "ARTIFACT_ARMOR_PLATE_KEEPER", q3: 1, city: "Thetford" },
  { id: "HEAD_PLATE_SET1", name: "Casco de Soldado", type: "dynamic", m1: "METALBAR", q1: 8, city: "Bridgewatch" },
  { id: "HEAD_PLATE_SET2", name: "Casco de Caballero", type: "dynamic", m1: "METALBAR", q1: 8, city: "Bridgewatch" },
  { id: "HEAD_PLATE_SET3", name: "Casco de Guardián", type: "dynamic", m1: "METALBAR", q1: 8, city: "Bridgewatch" },
  { id: "HEAD_PLATE_UNDEAD", name: "Casco de Sepulturero", type: "dynamic", m1: "METALBAR", q1: 8, m3: "ARTIFACT_HEAD_PLATE_UNDEAD", q3: 1, city: "Bridgewatch" },
  { id: "HEAD_PLATE_HELL", name: "Casco de Demonio", type: "dynamic", m1: "METALBAR", q1: 8, m3: "ARTIFACT_HEAD_PLATE_HELL", q3: 1, city: "Bridgewatch" },
  { id: "HEAD_PLATE_KEEPER", name: "Casco de Juez", type: "dynamic", m1: "METALBAR", q1: 8, m3: "ARTIFACT_HEAD_PLATE_KEEPER", q3: 1, city: "Bridgewatch" },
  { id: "SHOES_PLATE_SET1", name: "Botas de Soldado", type: "dynamic", m1: "METALBAR", q1: 8, city: "Lymhurst" },
  { id: "SHOES_PLATE_SET2", name: "Botas de Caballero", type: "dynamic", m1: "METALBAR", q1: 8, city: "Lymhurst" },
  { id: "SHOES_PLATE_SET3", name: "Botas de Guardián", type: "dynamic", m1: "METALBAR", q1: 8, city: "Lymhurst" },

  // --- ARMADURAS DE CUERO ---
  { id: "ARMOR_LEATHER_SET1", name: "Chaqueta de Mercenario", type: "dynamic", m1: "LEATHER", q1: 16, city: "Thetford" },
  { id: "ARMOR_LEATHER_SET2", name: "Chaqueta de Cazador", type: "dynamic", m1: "LEATHER", q1: 16, city: "Thetford" },
  { id: "ARMOR_LEATHER_SET3", name: "Chaqueta de Asesino", type: "dynamic", m1: "LEATHER", q1: 16, city: "Thetford" },
  { id: "HEAD_LEATHER_SET1", name: "Capucha de Mercenario", type: "dynamic", m1: "LEATHER", q1: 8, city: "Lymhurst" },
  { id: "HEAD_LEATHER_SET2", name: "Capucha de Cazador", type: "dynamic", m1: "LEATHER", q1: 8, city: "Lymhurst" },
  { id: "HEAD_LEATHER_SET3", name: "Capucha de Asesino", type: "dynamic", m1: "LEATHER", q1: 8, city: "Lymhurst" },
  { id: "SHOES_LEATHER_SET1", name: "Zapatos de Mercenario", type: "dynamic", m1: "LEATHER", q1: 8, city: "Martlock" },
  { id: "SHOES_LEATHER_SET2", name: "Zapatos de Cazador", type: "dynamic", m1: "LEATHER", q1: 8, city: "Martlock" },
  { id: "SHOES_LEATHER_SET3", name: "Zapatos de Asesino", type: "dynamic", m1: "LEATHER", q1: 8, city: "Martlock" },

  // --- ARMADURAS DE TELA ---
  { id: "ARMOR_CLOTH_SET1", name: "Toga de Erudito", type: "dynamic", m1: "CLOTH", q1: 16, city: "Bridgewatch" },
  { id: "ARMOR_CLOTH_SET2", name: "Toga de Clérigo", type: "dynamic", m1: "CLOTH", q1: 16, city: "Bridgewatch" },
  { id: "ARMOR_CLOTH_SET3", name: "Toga de Mago", type: "dynamic", m1: "CLOTH", q1: 16, city: "Bridgewatch" },
  { id: "HEAD_CLOTH_SET1", name: "Hábito de Erudito", type: "dynamic", m1: "CLOTH", q1: 8, city: "Fort Sterling" },
  { id: "HEAD_CLOTH_SET2", name: "Hábito de Clérigo", type: "dynamic", m1: "CLOTH", q1: 8, city: "Fort Sterling" },
  { id: "HEAD_CLOTH_SET3", name: "Hábito de Mago", type: "dynamic", m1: "CLOTH", q1: 8, city: "Fort Sterling" },
  { id: "SHOES_CLOTH_SET1", name: "Sandalias de Erudito", type: "dynamic", m1: "CLOTH", q1: 8, city: "Thetford" },
  { id: "SHOES_CLOTH_SET2", name: "Sandalias de Clérigo", type: "dynamic", m1: "CLOTH", q1: 8, city: "Thetford" },
  { id: "SHOES_CLOTH_SET3", name: "Sandalias de Mago", type: "dynamic", m1: "CLOTH", q1: 8, city: "Thetford" },

  // --- CAPAS & BOLSAS ---
  { id: "BAG", name: "Bolsa", type: "dynamic", m1: "LEATHER", q1: 8, m2: "CLOTH", q2: 8, city: "Cualquier Ciudad" },
  { id: "CAPE", name: "Capa Normal", type: "dynamic", m1: "CLOTH", q1: 4, m2: "LEATHER", q2: 4, city: "Brecilien / Caerleon" },

  // --- COMIDAS (Cuentan como 10 unidades fabricadas por click en el juego) ---
  { id: "T4_MEAL_STEW", name: "Estofado de Cabra (T4)", type: "fixed", tier: 4, m1: "T4_MEAT", q1: 18, m2: "T4_TURNIP", q2: 18, city: "Caerleon / Brecilien" },
  { id: "T6_MEAL_STEW", name: "Estofado de Ganso (T6)", type: "fixed", tier: 6, m1: "T6_MEAT", q1: 18, m2: "T6_CABBAGE", q2: 18, city: "Caerleon / Brecilien" },
  { id: "T8_MEAL_STEW", name: "Estofado de Ternera (T8)", type: "fixed", tier: 8, m1: "T8_MEAT", q1: 18, m2: "T8_PUMPKIN", q2: 18, city: "Caerleon / Brecilien" },
  { id: "T4_MEAL_PIE", name: "Pastel de Cabra (T4)", type: "fixed", tier: 4, m1: "T4_MEAT", q1: 18, m2: "T3_FLOUR", q2: 18, city: "Caerleon / Brecilien" },
  { id: "T6_MEAL_PIE", name: "Pastel de Ganso (T6)", type: "fixed", tier: 6, m1: "T6_MEAT", q1: 18, m2: "T3_FLOUR", q2: 18, city: "Caerleon / Brecilien" },
  { id: "T7_MEAL_PIE", name: "Pastel de Cerdo (T7)", type: "fixed", tier: 7, m1: "T7_CORN", q1: 24, m2: "T3_FLOUR", q2: 28, m3: "T7_MEAT", q3: 56, city: "Caerleon / Brecilien" },
  { id: "T8_MEAL_PIE", name: "Pastel de Ternera (T8)", type: "fixed", tier: 8, m1: "T8_MEAT", q1: 18, m2: "T3_FLOUR", q2: 18, city: "Caerleon / Brecilien" },

  // --- POCIONES (Cuentan como 5 unidades fabricadas por click) ---
  { id: "T4_POTION_HEAL", name: "Poción de Curación (T4)", type: "fixed", tier: 4, m1: "T4_COMFREY", q1: 24, m2: "T3_AGARIC", q2: 12, city: "Caerleon / Brecilien" },
  { id: "T6_POTION_HEAL", name: "Poción de Curación Mayor (T6)", type: "fixed", tier: 6, m1: "T6_DRAGONTEASEL", q1: 24, m2: "T5_BURDOCK", q2: 12, city: "Caerleon / Brecilien" },
  { id: "T8_POTION_HEAL", name: "Poción de Curación Magistral (T8)", type: "fixed", tier: 8, m1: "T8_FIREBLOOM", q1: 24, m2: "T7_ELUSIVEFOXGLOVE", q2: 12, city: "Caerleon / Brecilien" },
  
  // --- MONTURAS BASE ---
  { id: "T3_MOUNT_HORSE", name: "Caballo de Montar T3", type: "fixed", tier: 3, m1: "T3_FARM_HORSE_GROWN", q1: 1, m2: "T3_LEATHER", q2: 20, city: "Isla (0% RRR)" },
  { id: "T4_MOUNT_HORSE", name: "Caballo de Montar T4", type: "fixed", tier: 4, m1: "T4_FARM_HORSE_GROWN", q1: 1, m2: "T4_LEATHER", q2: 20, city: "Isla (0% RRR)" },
  { id: "T5_MOUNT_HORSE", name: "Caballo de Montar T5", type: "fixed", tier: 5, m1: "T5_FARM_HORSE_GROWN", q1: 1, m2: "T5_LEATHER", q2: 20, city: "Isla (0% RRR)" },
  { id: "T3_MOUNT_OX", name: "Buey de Transporte T3", type: "fixed", tier: 3, m1: "T3_FARM_OX_GROWN", q1: 1, m2: "T3_PLANKS", q2: 30, city: "Isla (0% RRR)" },
  { id: "T4_MOUNT_OX", name: "Buey de Transporte T4", type: "fixed", tier: 4, m1: "T4_FARM_OX_GROWN", q1: 1, m2: "T4_PLANKS", q2: 30, city: "Isla (0% RRR)" },
  { id: "T5_MOUNT_OX", name: "Buey de Transporte T5", type: "fixed", tier: 5, m1: "T5_FARM_OX_GROWN", q1: 1, m2: "T5_PLANKS", q2: 30, city: "Isla (0% RRR)" }
];

const ITEMS_MARKET = RECIPES_DB.map(r => ({ id: r.id, es: r.name }));
const EXTRAS = [
  { id: "CLOTH", es: "Tela Refinada" }, { id: "LEATHER", es: "Cuero Refinado" }, { id: "METALBAR", es: "Lingotes" }, { id: "PLANKS", es: "Tablas" }, { id: "STONEBLOCK", es: "Bloques" },
  { id: "MEAT", es: "Carne" }, { id: "MILK", es: "Leche" }, { id: "EGG", es: "Huevos" }, { id: "CARROT", es: "Zanahoria" }, { id: "POTATO", es: "Patata" }, { id: "CORN", es: "Maíz" }, { id: "PUMPKIN", es: "Calabaza" },
  { id: "AGARIC", es: "Hongo Arcano Agaric" }, { id: "COMFREY", es: "Consuelda" }, { id: "BURDOCK", es: "Bardana" }, { id: "FIREBLOOM", es: "Flor de Fuego" }
];
ITEMS_MARKET.push(...EXTRAS);

const MAPS_DB = [
  { name: "Lymhurst", type: "Ciudad Real", tier: "T3+", pvp: "Segura (Azul)", res: "Madera, Piedra, Piel" },
  { name: "Fort Sterling", type: "Ciudad Real", tier: "T3+", pvp: "Segura (Azul)", res: "Mineral, Piedra, Fibra" },
  { name: "Thetford", type: "Ciudad Real", tier: "T3+", pvp: "Segura (Azul)", res: "Madera, Mineral, Fibra" },
  { name: "Martlock", type: "Ciudad Real", tier: "T3+", pvp: "Segura (Azul)", res: "Madera, Piedra, Mineral" },
  { name: "Bridgewatch", type: "Ciudad Real", tier: "T3+", pvp: "Segura (Azul)", res: "Piel, Piedra, Fibra" },
  { name: "Caerleon", type: "Ciudad (Centro)", tier: "T3+", pvp: "Segura (Azul)", res: "Rodeada de Zonas Rojas" },
  { name: "Brecilien", type: "Ciudad Mística", tier: "T3+", pvp: "Segura (Azul)", res: "Acceso a Nieblas y Caminos" },
  { name: "Eldon Hill", type: "Continente Real", tier: "T5", pvp: "Facción (Amarilla)", res: "Madera, Piedra, Piel" },
  { name: "Roast Oasis", type: "Continente Real", tier: "T6", pvp: "PVP Total (Roja)", res: "Madera, Piedra, Piel" },
  { name: "Arthur's Rest", type: "Zona Negra (Santuario)", tier: "T7", pvp: "Segura", res: "Ninguno" },
  { name: "Sunfang Approach", type: "Zona Negra", tier: "T8", pvp: "PVP Total (Negra)", res: "Piel, Mineral, Fibra" },
  { name: "Caminos Avalonianos", type: "Caminos Avalonianos", tier: "T4-T8", pvp: "PVP Total (Negra)", res: "Todos los recursos aleatorios" }
];
