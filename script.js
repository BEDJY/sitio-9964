// Cloudflare D1 Serverless Database Wrapper
window.db = {
    async select(table, options = {}) {
        const response = await fetch('/functions/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'select',
                table: table,
                columns: options.columns || ['*'],
                where: options.where || {},
                order: options.order || ''
            })
        });
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        return res.data;
    },
    async insert(table, data) {
        const response = await fetch('/functions/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'insert',
                table: table,
                data: data
            })
        });
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        return res.data;
    },
    async update(table, data, where) {
        const response = await fetch('/functions/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'update',
                table: table,
                data: data,
                where: where
            })
        });
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        return res;
    },
    async delete(table, where) {
        const response = await fetch('/functions/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'delete',
                table: table,
                where: where
            })
        });
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        return res;
    }
};

console.log("Cyberpunk Restaurant Initialized");