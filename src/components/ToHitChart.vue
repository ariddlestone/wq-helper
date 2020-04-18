<template>
    <table class="to-hit">
        <thead>
            <tr>
                <th>Enemy WS</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>To Hit</th>
                <td>{{ toHit[0] }}</td>
                <td>{{ toHit[1] }}</td>
                <td>{{ toHit[2] }}</td>
                <td>{{ toHit[3] }}</td>
                <td>{{ toHit[4] }}</td>
                <td>{{ toHit[5] }}</td>
                <td>{{ toHit[6] }}</td>
                <td>{{ toHit[7] }}</td>
                <td>{{ toHit[8] }}</td>
                <td>{{ toHit[9] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    const toHitChart = [
        [4, 4, 5, 6, 6, 6, 6, 6, 6, 6],
        [3, 4, 4, 4, 5, 5, 6, 6, 6, 6],
        [2, 3, 4, 4, 4, 4, 5, 5, 5, 6],
        [2, 3, 3, 4, 4, 4, 4, 4, 5, 5],
        [2, 2, 3, 3, 4, 4, 4, 4, 4, 4],
        [2, 2, 3, 3, 3, 4, 4, 4, 4, 4],
        [2, 2, 2, 3, 3, 3, 4, 4, 4, 4],
        [2, 2, 2, 3, 3, 3, 3, 4, 4, 4],
        [2, 2, 2, 2, 3, 3, 3, 3, 4, 4],
        [2, 2, 2, 2, 3, 3, 3, 3, 3, 4],
    ];
    export default {
        name: "ToHitChart",
        props: {
            weaponSkill: Number,
        },
        computed: {
            toHit() {
                return toHitChart[this.weaponSkill - 1];
            },
        },
    }
</script>

<style scoped>
    th, td {
        text-align: center;
    }
</style>