const Tag = require('../models/Tag');
const PostTag = require('../models/PostTag');
const countPosts = async (tags) => {
    const tages = tags.map(tag => {
        const { _id, titulo } = tag;
        return { _id, titulo, qtdePosts: 0 };
    })
    const postTages = await PostTag.find();

    for (const pt of postTages) {
        for (const tag of tages) {
            if (String(tag._id) == String(pt.tagId)) {
                tag.qtdePosts++
            }
        }
    }
    return new Promise(resolve => {
        resolve(tages);
    })
}
module.exports = {
    index: async (req, res) => {
        try {
            const tags = await Tag.find().sort({ titulo: 'asc' });
            countPosts(tags).then(response => {
                res.json(response)
            });
        } catch (erro) {
            console.log(erro);
            res.status(500).send(erro);
        }
    },
    create: async (req, res) => {
        try {
            await Tag.findOneOrCreate(req.body, req.body); // Categoria é um modelo, logo podemos usar os métodos do mongoose.
            // HTTP Status 201: Created
            res.sendStatus(201);
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    indexByName: async (req, res) => {
        try {
            const { titulo } = req.query;
            const tags = await Tag.find({
                titulo: { $regex: ".*" + titulo + ".*" }
            }).sort({ titulo: 'asc' });
            countPosts(tags).then(response => {
                res.json(response)
            });
        } catch (erro) {
            console.log(erro);
        }
    }
}