// 🔥 DEINE SUPABASE DATEN
const SUPABASE_URL = "https://oinnxzalelhafopsgone.supabase.co";
const SUPABASE_KEY = "sb_publishable_in8Vaok_nPwg-Vifp2MoRA_cSv2Y1tX";

// Verbindung herstellen
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 🎮 SPIEL SPEICHERN
async function saveGame(gameId, points) {
  const { data, error } = await supabaseClient
    .from('games')
    .insert([
      {
        game_id: gameId,
        punktestand: Number(points),
        bezahlt: false
      }
    ])
    .select(); // 🔥 DAS IST DER FIX

  if (error) {
    console.error("Fehler beim Speichern:", error);
  } else {
    console.log("Gespeichert:", data);
  }
}