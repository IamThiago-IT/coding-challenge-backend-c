import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify'

export const ValidateQuery = (
    request: FastifyRequest<{ Querystring: { q: string } }>,
    reply: FastifyReply,
    done: HookHandlerDoneFunction
) => {
    if (!request.query.q) {
        reply.code(400).send({ message: 'Query parameter is required' })
    }
        done()
}