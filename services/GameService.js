import $api from "../http";

export default class GameService {
    static async getGames() {
        return $api.get('games')
    }

    static async createGame(name, slug, image) {
        return $api.post('game', {name, slug, image});
    }

    static async deleteGame(slug) {
        return $api.delete('games/'+slug);
    }
}